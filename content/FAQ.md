---
title: Frequently Asked Questions
url: faq/
summary: Frequently asked questions
showToc: true
tocopen: true
---

## I read the docs but still need help!

Come join the [Discord](https://discord.gg/PeHR6Tjyvn)! The community can help you in real-time!

## What is vpuppr?

vpuppr is an open-source project that animates models using the `glb` and `vrm` file formats.
It is most notable for tracking and rendering 3D Vtuber models.

## What are the supported platforms?

vpuppr is currently supported on Windows and most common Linux distributions. OSX is not currently supported, however
packaging vpuppr should be doable by following the
[official Godot instructions](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_macos.html).

## How do I report an issue?

Issues should be submitted on [GitHub](https://github.com/virtual-puppet-project/vpuppr/issues). Be sure to include
your operating system, app version, logs, and any other related information.

## How do I build from source?

vpuppr runs off a custom build of the Godot engine. Get a pre-compiled build of the engine [here](https://github.com/you-win/godot/releases). After that, follow the official vpuppr instructions [here](https://github.com/virtual-puppet-project/vpuppr#building-from-source).

## Why is tracking is not responding?

Please note it might take a second for tracking to activate. It _is_ trying to track your face! Also check that
your face is well lit. Usually having a lamp above your desk is enough. If it's still not working, submit an issue
and/or ask the Discord community!

## Why is mouse tracking not included by default?

Simply put, it's a very niche use-case and is less preferable to real face tracking.

## What engine is vpuppr using?

Currently vpuppr runs on Godot 3.x with plans to port over to 4.x once Godot 4 becomes more stable.

## Why is Flatpak labelled as deprecated?

The flatpak stable uses the code for a very early iteration of the program called OpenSeeFace-GD. A nod to the tracking software used in it.
However, as development of vpuppr continues, this version is now considered abandonware as users struggle to get it up and running. Should you
choose to run the flatpak, please download from the beta channel.