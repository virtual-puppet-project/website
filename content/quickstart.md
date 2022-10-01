---
title: Quickstart
url: quickstart/
summary: Getting started with vpuppr
showToc: true
tocopen: true
---

# Prerequisites

1. OpenSeeFace tracking: webcam

2. IFacialMocap tracking: iOS device with face ID (IPhone X or newer)

3. MeowFace tracking: Android device that supports ARCore (most modern phones do)

4. Mainstream 64-bit operating system

# Installation

## Windows

1. Download windows [zip file](https://github.com/virtual-puppet-project/vpuppr/releases)

2. Unzip files into a directory, (do not move files!)

3. Run the `.exe` on windows

4. Start the facetracker from within the app!

## Linux

### Flatpak

#### OpenSeeFace-GD (old)

Terminal:

```
    $ flatpak install flathub com.github.virtual_puppet_project.vpuppr
```

#### VPupPr (Alpha 2)

Terminal:

```
    $ flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
    $ flatpak install flathub-beta com.github.virtual_puppet_project.vpuppr
```

Maintainer: [Oro](https://github.com/orowith2os)

### Package manager

#### OpenSeeFace-GD (old)

Installation for [Arch Linux](https://aur.archlinux.org/packages/puppeteer)

Distribution specific packages are built and maintained by the community :)

### Binary

Download the linux [zip file](https://github.com/virtual-puppet-project/vpuppr/releases)

Terminal:

```
    $ cd Downloads/
    $ unzip vpuppr_0.9.0-alpha-2_linux.zip
    $ cd vpuppr_0.9.0-alpha-2_linux/
    $ chmod +x vpuppr.x86_64
    $ cd resources/extensions/open_see_face/OpenSeeFaceFolder/OpenSeeFace/
    $ chmod +x facetracker
```

To run:

```
    $ cd vpuppr_0.9.0-alpha-2_linux/
    $ ./vpuppr.x86_64
```

## Mac OS/OSX

Sorry, no build provided :( feel free to build from source!

Click here for [instructions!](https://github.com/virtual-puppet-project/vpuppr#building-from-source)

# Running

## OBS

Under construction.

## Loading your model

#### First time

1. Open the `model` menu

2. Load model

3. Open `.vrm` file

#### Loading a used model

1. Open `preset` menu

2. Select preset and hit `load`

## Tracking

### OpenSeeFace

Runs using your webcam on laptop/pc. Source code provided by [emilianavt](https://github.com/emilianavt/OpenSeeFace)

### iFacialMocap

Uses the 3D tracking capabilities of Apple Inc. devices to provide optimal tracking data from your phone. Use this if your model has
Perfect Sync.

"iFacialMocap is an app that captures facial movements with an iPhone equipped with FaceID. This app sends the captured motion in real time to 3DCG software such as Maya, Unity, Blender on PC." -iFacialMocap developers


### MeowFace

An Android version of iFacialMocap. Also supports Perfect Sync models.

"MeowFace is a precision face tracking application that can send 42 ARKit-like blendshapes as well as head rotation tracking to PC VTuber applications."
-MeowFace developers

### Vtube Studio

Available for both iOS and Android for face tracking. The PC version uses OpenSeeFace which is already built into VPupPr.

### Mouse Tracking

Not included by default. Follow [instructions](https://github.com/virtual-puppet-project/mouse-tracker) to add it!