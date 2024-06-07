-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);
