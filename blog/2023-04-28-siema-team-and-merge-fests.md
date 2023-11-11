---
title: "Empowering Open Source: SiemaTeam's Journey"
author: Pawel Siemienik
author_title: Founder
author_url: /pawel
author_image_url: https://avatars.githubusercontent.com/u/2893099?v=4
tags:
- OpenSource
- ExcelJS
- XToolset
- MergeFest
- SiemaTeam
- Spreadsheets
- Collaboration
- TypeScript
- SoftwareDevelopment
---

Hello hello, I'm delighted to share some updates with you regarding the current situation. First off, I've launched [@SiemaTeam](https://discord.gg/siema), where together we organize MergeFests. These are online meetings where we collaboratively conduct code reviews and merge PRs from **ExcelJS** and **XToolset**. So far, we've already had four such events, and the next one - the fifth - starts soon! There's another surprise, for those who missed ExcelJS releases - I published a fork [`@siema-team/spreadsheets`](https://www.npmjs.com/package/@siema-team/spreadsheets), which contains the latest and always up-to-date version of the main library.

*Head over to the rest of the blog, where you'll find more info on what's happening and how.*

## SiemaTeam - Open Source maintainers

[@SiemaTeam](https://discord.gg/siema) is enthusiastic team of volunteers who are passionate about supporting open-source initiatives. If you're in need of assistance, consultancy, or if you'd like to join us in contributing to the growth and development of these projects, please don't hesitate to reach out to us at:

<center>

[![SiemaTeam](https://discordapp.com/api/guilds/976854442009825321/widget.png?style=banner2)](https://discord.gg/siema)

**or siema@siemienik.com**

</center>


<!-- AutoLangGPT: from="PL" to="ENG" input=
Naszym celem jest wspolnie rozwijac projekty opensource i upowszechniac ich zastosowanie. Wierzymy, ze w ten sposob mozemy miec swoj wlasny wklad rozwoj cywilizacji. Jesli wydaje ci sie to ciekawe, mozesz do nas dolaczyc. Jestesmy bardzo otwarci na wszelkie contrybucje, w tym dyskusje i wspolne projekty. 

A co my z tego mamy? Na pierwszy rzut oka, wydaje sie ze nic. Robimy to w ramach wolontariatu. Ale musisz wiedziec ze przynosi to masę satysfakcji i pozwala poznawac ciekawych ludzi z calego swiata o podobnym (lub nie) podejsciu do Open Source-a. Dla mnie osobiscie, chwile spedzone w tej spolecznosci sa niezastapione. zapraszam rowniez i ciebie.
-->

Our goal is to collaboratively develop open-source projects and promote their use. We believe that by doing so, we can contribute to the advancement of civilization. If this sounds interesting to you, feel free to join us. We are very open to all kinds of contributions, including discussions and collaborative projects.

What's in it for us? At first glance, it seems like nothing. We do this as volunteers. However, you should know that it brings immense satisfaction and allows us to meet interesting people from around the world with similar (or different) approaches to Open Source. Personally, the moments spent in this community are irreplaceable. I warmly invite you to join us as well.

## MergeFests

What is a MergeFest? I explained it once on [LinkedIn post](https://www.linkedin.com/posts/siemienik_join-the-siema-discord-server-activity-7053853033994039296-twYT):

> 👋 #MergeFest is an opportunity to #review PRs and Issues, do reviews, and merge. The whole event is, of course, accompanied by a great discussion among #ExcelJS #contributors.
>
> Agenda:
> 
> 1. Small Talk - about 5 minutes
> 2. PR review: around 40 minutes
>     * we take a PR from the list of candidates
>     * we put it on the chat and give a moment to get acquainted with the PR
>     * discussion / review
>     * merge
> 3. Further project development - 10 minutes
> 4. Farewell and organization of the next MergeFest - 5minutes
> 
> The whole event is intended to be an informal gathering, where we can calmly discuss important issues for us and, above all, clear the list of PRs.
> 
> Best regards and see you there!


<!-- AutoLangGPT: from="PL" to="ENG" input=
Staramy sie je organizowac tak czesto jak to tylko mozliwe, zazwyczaj raz lub dwa razy na tydzien. Obserwuj kanal #exceljs, tam sie zawsze zmawiamy kiedy mamy wolny czas na MF.

Wtrakcie wczesniejszych 4 mergefestow zmergowalismy 11 PRów z exceljs i kilka z xtoolset, sprawdzislismy wiecej ale jeszcze nie zostaly zmergowane. Ustalilismy jakie sa nasze cele, w tym migracja na TS i naprawa bledow. Tak wiec efekty sa namacalne i realne. Uczestnicy MF maja realny wplyw na przyszlosc projektow. 
Dziekuje wam wszystkim, ktorzy dolaczyli do tych spotkan - bardzo to doceniam!
-->

We try to organize them as often as possible, typically once or twice a week. Subscirbe the #exceljs channel, we always gather there when we have some spare time for the next MergeFest.

During the previous I - IV MergeFests, we merged 11 PRs from ExcelJS and few from XToolset. We reviewed more but they haven't been merged yet. We discuss our goals, including migrating to TypeScript and fixing errors. So the outcomes are tangible and real. Mergefest participants have a genuine impact on the projects' future.

**Thank you all who joined these meetings, You're brillant! I really appreciate it!**

## Project: ExcelJS

<!-- AutoLangGPT: from="PL" to="ENG" input=
Aktywnie review-ujemy PRy i rozwiazujemy issues z ExcelJS. Dodatkowo, [nasz fork](https://github.com/SiemaTeam/Spreadsheets) jest skonfigurowany w taki sposób, aby był zawsze up-to-date z głównym repo. W planach jest continues delivery do npm.
Chcemy osiągnać coraz większą kompatybilnosc z formatem xlsx. Zmigrowac caly projekt na TypeScript i poprawic tyle bugow ile to tylko mozliwe. Trzymaj kciuki!

A jezeli chcesz nas wesprzec, porozmiaj z nami na Discord, albo zaloz PullRequest. Mozesz rowniez zostac moim sponsorem lub wykupic moj konsulting, o ewentualnych perkach z checia porozmawiam.

juz teraz mozesz dokonac migracje z standardowej paczki exceljs do naszej poprzez podmiane `exceljs` na `@siema-team/spreadsheets`. Obiecuje ze zachowamy kompatybilnosc wsteczna. Nasz fork jest najaktualniejsza wersja exceljs-a, mysle ze to glowny powod dlaczego warto.
-->
We actively review PRs and address issues for ExcelJS. Additionally, [our fork](https://github.com/SiemaTeam/Spreadsheets) is configured to always be up-to-date with the main repo. Continuous delivery to npm is planned.
We want to achieve greater compatibility with the xlsx format. Migrate the entire project to TypeScript, and fix as many bugs as possible. Keep your fingers crossed!

If you'd like to support us, join our Discord conversation, or create a Pull Request. You can also become a sponsor or purchase my consulting services, and I'd be happy to discuss any potential perks.

You can already migrate from the standard exceljs package to ours by replacing `exceljs` with `@siema-team/spreadsheets`. I will keep backward compatibility. Our fork is the most up-to-date version of exceljs,  which I believe is the primary reason to make the switch.

### Project: XToolset

<!-- AutoLangGPT: from="PL" to="ENG" input=
Po prawie roku nie rozwijania tego swietnego projektu, powrocilem aby pchnac go dalej. Ma potencjal i chce go rozwinac. Dla tych co nie wiedza, xtoolset to zestaw narzedzi, ktore sie sa wyspecjalizowane na konkretych zadaniach. Generowania spreadsheetow na podstawie templatow oraz wygodnym imporcie danych.

Wkrotce wrzuce na GH pullrequesty z kilkoma poprawkami, i umieszcze bundla na serverze CDN. Potem release nowej werjsi. Najpierw jednak chce pomergowac ExcelJS-a, poniewaz to na nim xtoolset stoi.
-->
After almost a year of not developing this fantastic project, I've returned to push it further. It has potential and I want to develop it. For those who don't aware, XToolset is a set of tools specialized in specific tasks, such as generating spreadsheets based on templates and facilitating easy data import.

Soon I'll submit some pull requests with a few improvements on GitHub and put a bundle on the CDN server. Following that, I'll release a new version. First, though, I want to develop ExcelJS, as xtoolset relies on it.

### Project: is comming!

<!-- AutoLangGPT: from="PL" to="ENG" input=
Dodatkowo, wlasnie rozpoczynam startup. Na ten moment dogrywam szczegoly i przymierzam sie do zebrania zespolu. Mam nadzieje ze bede mogl w niedlugiej przyszlosci pochwalic sie MVP. 

Dzieki za twoja uwage. mam nadzieje ze z przyjemnoscia przeczytales moj update! Pozdrawiam i do zobaczenia wkrotce!
-->

Additionally, I'm currently launching a startup. At this moment, I'm working out the details and getting ready to assemble a team. I hope to share our MVP in the near future.

Thank you for your attention. I hope you enjoyed reading my update! Best regards, and see you soon!
