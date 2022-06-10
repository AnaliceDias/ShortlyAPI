CREATE TABLE usuarios (
    id serial PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    token TEXT DEFAULT NULL,
    "createAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "urlsEncurtadas" (
    id serial PRIMARY KEY,
    "usuarioId" INTEGER REFERENCES "usuarios"("id"),
    "urlOriginal" TEXT NOT NULL,
    "urlEncurtada" TEXT NOT NULL UNIQUE,
    "numeroCliques" INTEGER DEFAULT 0,
    "createAt" TIMESTAMP NOT NULL DEFAULT NOW()
);
