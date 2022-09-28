---
url: quickstart/
summary: Getting started with vpuppr
showToc: true
tocopen: true
---

# Prerequisites

1- A phone (IOS for IFacialMocap) or a webcam (OpenSeeFace)

other hardware/software specs under construction ;)

# Installation

Under construction. Grab something from [downloads]({{< ref "downloads/">}}) :)

## Windows

1- download windows [zip file](https://github.com/virtual-puppet-project/vpuppr/releases)

2- unzip files into a directory, (do not move files!)

3- run the ``.exe`` on windows

4- start the facetracker from within the app!

## Linux

### Flatpak

#### OpenSeeFace-GD (old)
```
    $ flatpak install flathub com.github.virtual_puppet_project.vpuppr
```

#### VPupPr (Alpha 2)
```
    $ flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
    $ flatpak install flathub-beta com.github.virtual_puppet_project.vpuppr
```

Maintainer: [Oro](https://github.com/orowith2os)

### Package manager

#### OpenSeeFace-GD (old)

installation for [arch](https://aur.archlinux.org/packages/puppeteer)

~~Other Types Not Provided~~, package managers are made by the community :)

### Binary

Download the linux [zip file](https://github.com/virtual-puppet-project/vpuppr/releases)

```
    $ cd Downloads/
    $ unzip vpuppr_0.9.0-alpha-2_linux.zip
    $ cd vpuppr_0.9.0-alpha-2_linux/
    $ chmod +x vpuppr.x86_64
    $ cd resources/extensions/open_see_face/OpenSeeFaceFolder/OpenSeeFace/
    $ chmod +x facetracker
    To run-
    $ cd vpuppr_0.9.0-alpha-2_linux/
    $ ./vpuppr.x86_64
```

## Mac OS/OSX

Sorry, no build provided :( feel free to build from source!

# Running

## OBS

Under construction.

## Loading your model

#### First time

1- open the ``model`` menu

2- load model

3- open ``.vrm`` file

#### Loading a used model

1- open ``preset`` menu

2- select preset and hit ``load``

## Tracking

### OpenSeeFace

Runs using your webcam on laptop/pc. Source code provided by [emilianavt](https://github.com/emilianavt/OpenSeeFace)

### IFacialMocap

Uses the 3D tracking capabilities of Apple Inc devices to provide optimal tracking data from your phone.