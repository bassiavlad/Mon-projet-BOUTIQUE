CREATE TABLE Utilisateurs(
   id_article CHAR(8),
   Nom CHAR(8) NOT NULL,
   Prénom CHAR(10),
   password CHAR(6) NOT NULL,
   Tel COUNTER NOT NULL,
   PRIMARY KEY(id_article)
);

CREATE TABLE Articles(
   id_articles VARCHAR(10),
   Affichers_images_ VARCHAR(15) NOT NULL,
   Noms VARCHAR(15) NOT NULL,
   Prix_articles CHAR(5) NOT NULL,
   Descriptions VARCHAR(30) NOT NULL,
   Favoris VARCHAR(10) NOT NULL,
   PRIMARY KEY(id_articles)
);

CREATE TABLE Images(
   id_images CHAR(15),
   Liens_vers_images_1 CHAR(15) NOT NULL,
   Affichages_images CHAR(15) NOT NULL,
   PRIMARY KEY(id_images)
);

CREATE TABLE Factures(
   id_Facture CHAR(10),
   FactureDate_1 CHAR(10),
   Description CHAR(30) NOT NULL,
   PRIMARY KEY(id_Facture)
);

CREATE TABLE Ajouters(
   id_article CHAR(8),
   id_articles VARCHAR(10),
   Quantités CHAR(15),
   PRIMARY KEY(id_article, id_articles),
   FOREIGN KEY(id_article) REFERENCES Utilisateurs(id_article),
   FOREIGN KEY(id_articles) REFERENCES Articles(id_articles)
);

CREATE TABLE Appartenir(
   id_articles VARCHAR(10),
   id_images CHAR(15),
   Afficher CHAR(15) NOT NULL,
   PRIMARY KEY(id_articles, id_images),
   FOREIGN KEY(id_articles) REFERENCES Articles(id_articles),
   FOREIGN KEY(id_images) REFERENCES Images(id_images)
);

CREATE TABLE Transferes(
   id_articles VARCHAR(10),
   id_Facture CHAR(10),
   Enregistres CHAR(10) NOT NULL,
   PRIMARY KEY(id_articles, id_Facture),
   FOREIGN KEY(id_articles) REFERENCES Articles(id_articles),
   FOREIGN KEY(id_Facture) REFERENCES Factures(id_Facture)
);



INSERT INTO Utilisateurs (id_article, Nom, Prénom, password, Tel)
VALUES
('USR00001', 'Dupont', 'Jean', 'pass01', 1234567890),
('USR00002', 'Martin', 'Luc', 'pass02', 1234567891),
('USR00003', 'Bernard', 'Marie', 'pass03', 1234567892),
('USR00004', 'Petit', 'Pierre', 'pass04', 1234567893),
('USR00005', 'Robert', 'Camille', 'pass05', 1234567894),
('USR00006', 'Richard', 'Paul', 'pass06', 1234567895),
('USR00007', 'Durand', 'Sophie', 'pass07', 1234567896),
('USR00008', 'Moreau', 'Anne', 'pass08', 1234567897),
('USR00009', 'Laurent', 'Louis', 'pass09', 1234567898),
('USR00010', 'Simon', 'Julie', 'pass10', 1234567899);

INSERT INTO Articles (id_articles, Affichers_images_, Noms, Prix_articles, Descriptions, Favoris)
VALUES
('ART00001', 'img1.jpg', 'Football', '50.00', 'Ballon de football en cuir', 'Oui'),
('ART00002', 'img2.jpg', 'Basketball', '45.00', 'Ballon de basketball', 'Non'),
('ART00003', 'img3.jpg', 'Tennis', '30.00', 'Raquette de tennis', 'Oui'),
('ART00004', 'img4.jpg', 'Running', '80.00', 'Chaussures de running', 'Non'),
('ART00005', 'img5.jpg', 'Cycling', '150.00', 'Vélo de course', 'Oui'),
('ART00006', 'img6.jpg', 'Swimming', '25.00', 'Lunettes de natation', 'Non'),
('ART00007', 'img7.jpg', 'Boxing', '60.00', 'Gants de boxe', 'Oui'),
('ART00008', 'img8.jpg', 'Golf', '120.00', 'Club de golf', 'Non'),
('ART00009', 'img9.jpg', 'Fitness', '20.00', 'Haltères', 'Oui'),
('ART00010', 'img10.jpg', 'Yoga', '35.00', 'Tapis de yoga', 'Non');

INSERT INTO Images (id_images, Liens_vers_images_1, Affichages_images)
VALUES
('IMG00000000001', 'img1.jpg', 'Image Football'),
('IMG00000000002', 'img2.jpg', 'Image Basketball'),
('IMG00000000003', 'img3.jpg', 'Image Tennis'),
('IMG00000000004', 'img4.jpg', 'Image Running'),
('IMG00000000005', 'img5.jpg', 'Image Cycling'),
('IMG00000000006', 'img6.jpg', 'Image Swimming'),
('IMG00000000007', 'img7.jpg', 'Image Boxing'),
('IMG00000000008', 'img8.jpg', 'Image Golf'),
('IMG00000000009', 'img9.jpg', 'Image Fitness'),
('IMG00000000010', 'img10.jpg', 'Image Yoga');


INSERT INTO Factures (id_Facture, FactureDate_1, Description)
VALUES
('FAC0000001', '2024-01-15', 'Achat ballon de football'),
('FAC0000002', '2024-02-10', 'Achat ballon de basketball'),
('FAC0000003', '2024-03-05', 'Achat raquette de tennis'),
('FAC0000004', '2024-04-20', 'Achat chaussures de running'),
('FAC0000005', '2024-05-25', 'Achat vélo de course'),
('FAC0000006', '2024-06-30', 'Achat lunettes de natation'),
('FAC0000007', '2024-07-15', 'Achat gants de boxe'),
('FAC0000008', '2024-08-10', 'Achat club de golf'),
('FAC0000009', '2024-09-05', 'Achat haltères'),
('FAC0000010', '2024-10-20', 'Achat tapis de yoga');


INSERT INTO Ajouters (id_article, id_articles, Quantités)
VALUES
('USR00001', 'ART000001', '10'),
('USR00002', 'ART000002', '5'),
('USR00003', 'ART000003', '15'),
('USR00004', 'ART000004', '20'),
('USR00005', 'ART000005', '7'),
('USR00006', 'ART000006', '25'),
('USR00007', 'ART000007', '10'),
('USR00008', 'ART000008', '12'),
('USR00009', 'ART000009', '8'),
('USR00010', 'ART000010', '30');

INSERT INTO Appartenir (id_articles, id_images, Afficher)
VALUES
('ART000001', 'IMG00000001', 'oui'),
('ART000002', 'IMG00000002', 'oui'),
('ART000003', 'IMG00000003', 'oui'),
('ART000004', 'IMG00000004', 'oui'),
('ART000005', 'IMG00000005', 'oui'),
('ART000006', 'IMG00000006', 'oui'),
('ART000007', 'IMG00000007', 'oui'),
('ART000008', 'IMG00000008', 'oui'),
('ART000009', 'IMG00000009', 'oui'),
('ART000010', 'IMG00000010', 'oui');

INSERT INTO Transferes (id_articles, id_Facture, Enregistres)
VALUES
('ART000001', 'FAC000001', 'Enr001'),
('ART000002', 'FAC000002', 'Enr002'),
('ART000003', 'FAC000003', 'Enr003'),
('ART000004', 'FAC000004', 'Enr004'),
('ART000005', 'FAC000005', 'Enr005'),
('ART000006', 'FAC000006', 'Enr006'),
('ART000007', 'FAC000007', 'Enr007'),
('ART000008', 'FAC000008', 'Enr008'),
('ART000009', 'FAC000009', 'Enr009'),
('ART000010', 'FAC000010', 'Enr010');
