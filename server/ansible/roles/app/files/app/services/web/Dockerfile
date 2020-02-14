###########
# BUILDER #
###########

# Base Image
FROM python:3.7 as builder

# Lint
RUN pip install flake8 black
WORKDIR /home/main
COPY app ./app
COPY manage.py .
RUN flake8 --ignore=E501 .
RUN black --check .

# Install Requirements
COPY requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /home/main/wheels -r requirements.txt


#########
# FINAL #
#########

# Base Image
FROM python:3.7-slim

# ----- NEW ----
# Install curl
RUN apt-get update && apt-get install -y curl

# Create directory for the main user
RUN mkdir -p /home/main

# Create the main user
RUN groupadd main && useradd -g main main

# Create the home directory
ENV HOME=/home/main
ENV MAIN_HOME=/home/main/web
RUN mkdir $MAIN_HOME
WORKDIR $MAIN_HOME

# Install Requirements
COPY --from=builder /home/main/wheels /wheels
COPY --from=builder /home/main/requirements.txt .
RUN pip install --no-cache /wheels/*

# Copy in the Flask code
COPY . $MAIN_HOME

# Chown all the files to the main user
RUN chown -R main:main $MAIN_HOME

# Change to the main user
USER main

# run server
CMD gunicorn --log-level=debug -b 0.0.0.0:5000 manage:app
