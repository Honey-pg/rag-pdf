FROM python:3.12-slim

# Install system-level dependencies (poppler-utils, ffmpeg, curl)
RUN apt-get update && apt-get install -y --no-install-recommends \
    poppler-utils \
    ffmpeg \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Create a non-root user with UID 1000 (Required by Hugging Face Spaces & security best practices)
RUN useradd -m -u 1000 user
ENV HOME=/home/user \
    PATH=/home/user/.local/bin:$PATH

# Install uv globally for fast reproducible package management
RUN curl -LsSf https://astral.sh/uv/install.sh | sh
ENV PATH="/root/.local/bin:${PATH}"

# Copy dependency specifications
COPY pyproject.toml requirements.txt ./

# Install python dependencies globally inside container
RUN uv pip install --system --no-cache -r requirements.txt

# Copy application source code with user ownership
COPY --chown=user:user app /app/app
COPY --chown=user:user main.py /app/main.py

# Create data directory and set ownership so user (UID 1000) can write to it
RUN mkdir -p /app/data && chown -R user:user /app/data

# Use non-root user
USER user

EXPOSE 7860

# Health check using standard library urllib
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:7860/health')" || exit 1

# Start FastAPI server
CMD ["python", "-m", "uvicorn", "app.api.server:app", "--host", "0.0.0.0", "--port", "7860"]
