---
title: Quickstart
url: quickstart/
summary: Getting started with vpuppr
showToc: true
tocopen: true
---

# Prerequisites

1- OpenSeeFace tracking: webcam

2- IFacialMocap tracking: iOS device with face ID or A12 (or newer) chip

3- MeowFace tracking: android device that supports ARCore (most modern phones do)

4- 64-bit Operating system with x86 architecture

# Installation

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

click here for [instructions!]({{< ref "source/#building-from-source">}})

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

Uses the 3D tracking capabilities of Apple Inc devices to provide optimal tracking data from your phone. Use if your model has
perfect sync.

iFacialMocap is an app that captures facial movements with an iPhone equipped with FaceID. This app sends the captured motion in real time to 3DCG software such as Maya, Unity, Blender on PC. -IFM developers


### MeowFace

An android version of IFacialMocap. Also supports perfect sync models.

MeowFace is a precision face tracking application that can send 42 ARKit-like blendshapes as well as head rotation tracking to PC VTuber applications. -MF developers

### Vtube Studio

Available for both iOS and Android for face tracking. The PC version uses OpenSeeFace which is already built into VPupPr.

### Mouse Tracking

Not included by default. Follow instructions to add it!

#### Prebuilt release

1- Download latest [release](https://github.com/virtual-puppet-project/mouse-tracker/releases)

2- navigate to ``vpuppr_0.9.0-alpha-2_linux/resources/extensions``

3- Create directory with name ``mouse-tracker`` and unzip the contents into it

4- use the tracker in the app!

#### Manual Build

1- Navigate to ``vpuppr_0.9.0-alpha-2_linux/resources/extensions``

2- Create directory ``mouse-tracker``

3- Copy the following files from this [repo](https://github.com/virtual-puppet-project/mouse-tracker)

   * ./lib/
    
   * ./translations/
    
   * mouse_tracker.gd
    
   * gui.gd
    
   * config.ini

4. Use the tracker in the app!