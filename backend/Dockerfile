FROM python:3.11-slim-bullseye

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app/backend

RUN pip install poetry
COPY poetry.lock pyproject.toml /app/backend/
RUN poetry install

COPY . /app/backend/

RUN chmod +x /app/backend/start.sh

EXPOSE 8000 

CMD [ "poetry", "run", "./start.sh" ]