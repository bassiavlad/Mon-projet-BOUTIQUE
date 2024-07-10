-- Insertion des données dans la table Utilisateurs
INSERT INTO Utilisateurs (id_article, Nom, Prénom, password, Tel)
VALUES 
('U0000001', 'Smith', 'John', 'pass01', 1234567890),
('U0000002', 'Doe', 'Jane', 'pass02', 2345678901),
('U0000003', 'Brown', 'Bob', 'pass03', 3456789012),
('U0000004', 'White', 'Alice', 'pass04', 4567890123),
('U0000005', 'Green', 'Eve', 'pass05', 5678901234),
('U0000006', 'Black', 'Will', 'pass06', 6789012345),
('U0000007', 'Gray', 'Gary', 'pass07', 7890123456),
('U0000008', 'Blue', 'Sally', 'pass08', 8901234567),
('U0000009', 'Red', 'Tom', 'pass09', 9012345678),
('U0000010', 'Pink', 'Lucy', 'pass10', 9123456789);

-- Insertion des données dans la table Articles
INSERT INTO Articles (id_articles, Affichers_images_, Noms, Prix_articles, Descriptions, Favoris)
VALUES 
('A000000001', 'image01.jpg', 'Ballon', '20.00', 'Ballon de football', 'oui'),
('A000000002', 'image02.jpg', 'Raquette', '50.00', 'Raquette de tennis', 'non'),
('A000000003', 'image03.jpg', 'Casque', '30.00', 'Casque de vélo', 'oui'),
('A000000004', 'image04.jpg', 'Gants', '15.00', 'Gants de boxe', 'non'),
('A000000005', 'image05.jpg', 'Chaussures', '70.00', 'Chaussures de course', 'oui'),
('A000000006', 'image06.jpg', 'Tapis', '25.00', 'Tapis de yoga', 'non'),
('A000000007', 'image07.jpg', 'Vélo', '200.00', 'Vélo de montagne', 'oui'),
('A000000008', 'image08.jpg', 'Filet', '40.00', 'Filet de badminton', 'non'),
('A000000009', 'image09.jpg', 'Palet', '10.00', 'Palet de hockey', 'oui'),
('A000000010', 'image10.jpg', 'Haltères', '35.00', 'Paire d\'haltères', 'non');

-- Insertion des données dans la table Images
INSERT INTO Images (id_images, Liens_vers_images_1, Affichages_images)
VALUES 
('I000000001', 'img01.jpg', 'Affiche1'),
('I000000002', 'img02.jpg', 'Affiche2'),
('I000000003', 'img03.jpg', 'Affiche3'),
('I000000004', 'img04.jpg', 'Affiche4'),
('I000000005', 'img05.jpg', 'Affiche5'),
('I000000006', 'img06.jpg', 'Affiche6'),
('I000000007', 'img07.jpg', 'Affiche7'),
('I000000008', 'img08.jpg', 'Affiche8'),
('I000000009', 'img09.jpg', 'Affiche9'),
('I000000010', 'img10.jpg', 'Affiche10');

-- Insertion des données dans la table Factures
INSERT INTO Factures (id_Facture, FactureDate_1, Description)
VALUES 
('F000000001', '2023-06-01', 'Facture 1'),
('F000000002', '2023-06-02', 'Facture 2'),
('F000000003', '2023-06-03', 'Facture 3'),
('F000000004', '2023-06-04', 'Facture 4'),
('F000000005', '2023-06-05', 'Facture 5'),
('F000000006', '2023-06-06', 'Facture 6'),
('F000000007', '2023-06-07', 'Facture 7'),
('F000000008', '2023-06-08', 'Facture 8'),
('F000000009', '2023-06-09', 'Facture 9'),
('F000000010', '2023-06-10', 'Facture 10');

-- Insertion des données dans la table Ajouters
INSERT INTO Ajouters (id_article, id_articles, Quantités)
VALUES 
('U0000001', 'A000000001', '5'),
('U0000002', 'A000000002', '2'),
('U0000003', 'A000000003', '3'),
('U0000004', 'A000000004', '4'),
('U0000005', 'A000000005', '1'),
('U0000006', 'A000000006', '7'),
('U0000007', 'A000000007', '6'),
('U0000008', 'A000000008', '8'),
('U0000009', 'A000000009', '9'),
('U0000010', 'A000000010', '10');

-- Insertion des données dans la table Appartenir
INSERT INTO Appartenir (id_articles, id_images, Afficher)
VALUES 
('A000000001', 'I000000001', 'oui'),
('A000000002', 'I000000002', 'non'),
('A000000003', 'I000000003', 'oui'),
('A000000004', 'I000000004', 'non'),
('A000000005', 'I000000005', 'oui'),
('A000000006', 'I000000006', 'non'),
('A000000007', 'I000000007', 'oui'),
('A000000008', 'I000000008', 'non'),
('A000000009', 'I000000009', 'oui'),
('A000000010', 'I000000010', 'non');

-- Insertion des données dans la table Transferes
INSERT INTO Transferes (id_articles, id_Facture, Enregistres)
VALUES 
('A000000001', 'F000000001', 'Enr01'),
('A000000002', 'F000000002', 'Enr02'),
('A000000003', 'F000000003', 'Enr03'),
('A000000004', 'F000000004', 'Enr04'),
('A000000005', 'F000000005', 'Enr05'),
('A000000006', 'F000000006', 'Enr06'),
('A000000007', 'F000000007', 'Enr07'),
('A000000008', 'F000000008', 'Enr08'),
('A000000009', 'F000000009', 'Enr09'),
('A000000010', 'F000000010', 'Enr10');
