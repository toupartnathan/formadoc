---
sidebar_position: 2
---

# Solution

## Choix technique

- **[Laravel 8](https://laravel.com/docs/8.x)**
- **[Laravel Breeze](https://laravel.com/docs/8.x/starter-kits#laravel-breeze)** (v1.9.2)
- **[Laravel Lang](https://laravel-lang.com/installation/compatibility.html#_9-0)** (v9)
- **[Bootswatch 4 (United)](https://bootswatch.com/4/united/)** (v4.6) <i>[Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/) theme</i>
- **[FontAwesome](https://fontawesome.com/v5/search?o=r&m=free)** (Free v5.15.4)
- **[Jquery-confirm](https://craftpip.github.io/jquery-confirm/)** (v3.3.2)
- **[MDB datatables](https://mdbootstrap.com/docs/b4/jquery/tables/datatables/)** 
- **[Notyf js](https://github.com/caroso1222/notyf)** (v3.10)
- **[PDF tk](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/)**

## Structure de l'application

``` 
├── app/
    ├── Http/
        ├── Controllers/
            ├── Auth/ # Folder contenant la logique de Laravel Breeze
            ├── DashboardController.php # contient les méthodes liée a la partie admin
            ├── PrincipalController.php # contient les méthode liée au formulaire de saisies
    ├── Models/ # Classe de l'applications
|
├── public/
    ├── css/
    ├── js/
    ├── images/
    ├── ressources/ # Folders contenant l'ensemble des technos
        ├── Bootstrap/
        ├── Fontawesome/
        ├── Jquery-confirm/
        ├── MDB/
        ├── Notyf/
        ├── pdftk/
        ├── Select2/
├── ressources/
    ├── view/
        ├── auth/ # Folder contenant les vues de Laravel Breeeze
        ├── components/ # Folder contenant les components réalisé par Laravel Breeze
        ├── dashboard # Contient les vues de la partie admin
        ├── layout/ # Folder contenant les layout réalisé par Laravel Breeze puis modifer
            ├── app.blade.php
            ├── guest.blade.php
            ├── navbar.blade.php
        ├── vendor # Template des mails markdown utilisée pour la renitialisation des mots de passe
├── routes/
    ├── auth.php # route utilisée par Laravel Breeze
    ├── web.php # route applications
├── storage/
    ├── app/
        ├── pdf/ # folder contenant les templates pdf utilisée
├── tests/
    ├── Feature/ # Test l'ensemble des financements
```
