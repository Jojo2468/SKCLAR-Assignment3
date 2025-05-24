FROM postgres:15-alpine
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=pass
ENV POSTGRES_DB=testdb
COPY init.sql /docker-entrypoint-initdb.d/