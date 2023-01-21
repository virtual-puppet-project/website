---
title: Quickstart
url: quickstart/
summary: Getting started with vpuppr
showToc: true
tocopen: true
---

# Prerequisites

1. Webcam _or_ smartphone
2. Mainstream 64-bit operating system

# Installation

## Windows

1. Download the [application](https://github.com/virtual-puppet-project/vpuppr/releases/download/0.9.0-alpha-2/vpuppr_0.9.0-alpha-2_windows.zip)
2. Unzip files into a directory (do not move files!)
3. Run the `.exe` on Windows
4. Start the facetracker from within the app

## Linux

### Flatpak

#### OpenSeeFace-GD (deprecated, do not use)

Terminal:

```Bash
    $ flatpak install flathub com.github.virtual_puppet_project.vpuppr
```

#### vpuppr (Alpha 2)

Terminal:

```Bash
    $ flatpak remote-add --if-not-exists flathub-beta https://flathub.org/beta-repo/flathub-beta.flatpakrepo
    $ flatpak install flathub-beta com.github.virtual_puppet_project.vpuppr
```

Maintainer: [Oro](https://github.com/orowith2os)

### Package manager

#### OpenSeeFace-GD (old)

Installation for [Arch Linux](https://aur.archlinux.org/packages/puppeteer)

Distribution specific packages are built and maintained by the community :)

### Binary

Download the [application](https://github.com/virtual-puppet-project/vpuppr/releases/download/0.9.0-alpha-2/vpuppr_0.9.0-alpha-2_linux.zip)

Terminal:

```Bash
    $ cd Downloads/
    $ unzip vpuppr_0.9.0-alpha-2_linux.zip
    $ cd vpuppr_0.9.0-alpha-2_linux/
    $ chmod +x vpuppr.x86_64
    $ cd resources/extensions/open_see_face/OpenSeeFaceFolder/OpenSeeFace/
    $ chmod +x facetracker
```

To run:

```Bash
    $ cd vpuppr_0.9.0-alpha-2_linux/
    $ ./vpuppr.x86_64
```

## OSX

Sorry, no OSX builds are provided :( Feel free to build from source!

Click here for [instructions!](https://github.com/virtual-puppet-project/vpuppr#building-from-source)

# Running

## OBS

Under construction.

## Loading your model

### First time

1. Open the `model` menu
2. Select your model

### Loading a previously used model

1. Open the `preset` menu
2. Select the preset and press `load`

## Available trackers

### OpenSeeFace

Runs using your webcam on laptop/pc. The tracker is developed by [emilianavt](https://github.com/emilianavt/OpenSeeFace).

### iFacialMocap

Uses the 3D tracking capabilities of Apple Inc. devices to provide tracking data from your phone. Provides data
compatible with Perfect Sync models.

> "iFacialMocap is an app that captures facial movements with an iPhone equipped with FaceID. This app sends the captured motion in real time to 3DCG software such as Maya, Unity, Blender on PC." - iFacialMocap website

### MeowFace

An Android app that is similar to iFacialMocap.

> "MeowFace is a precision face tracking application that can send 42 ARKit-like blendshapes as well as head rotation tracking to PC VTuber applications." - MeowFace app listing

### Vtube Studio

Available for on both iOS and Android for face tracking.

> "VTube Studio is an app for Virtual YouTubers that makes it easy and fun to bring your own Live2D models to life." - VTube Studio website

### Mouse Tracking

Not included by default. Follow these [instructions](https://github.com/virtual-puppet-project/mouse-tracker) to add it!