---
title: Source
url: source/
summary: Source for the Virtual Puppet Project
showToc: true
tocopen: true
---

## Applications

[vpuppr](https://github.com/virtual-puppet-project/vpuppr)

[Website](https://github.com/virtual-puppet-project/virtual-puppet-project-website)

## GitHub Organization

[Virtual Puppet Project](https://github.com/virtual-puppet-project)

## Building from Source

This is for people wanting to build from source rather than using a built version for the specific operating system.

1. Clone or download this repository at the appropriate tag (or `master` for the latest commit)

   * This repository uses git submodules, so the `--recurse-submodules` flag will need to be passed in order to clone the submodules as well

2. Download a precompiled Godot editor binary from the [virtual-puppet-project's Godot fork](https://github.com/virtual-puppet-project/godot/releases)

   * If you would rather compile the engine yourself, please see [the section on compiling the Godot fork](#building-the-godot-fork)

3. Download a precompiled Godot release template from the same repository in step 2

4. Run the custom Godot editor and open your local copy of `vpuppr` with the editor

5. Follow the [Godot instructions for exporting a project](https://docs.godotengine.org/en/stable/tutorials/export/exporting_projects.html) and use the custom 
templates downloaded from step 3 instead of the default templates

6. Next to your resulting binary, copy the `resources` folder next to it. The `resources` folder is read at runtime

7. Each tracker has its own dependencies. In the [list of trackers](https://github.com/virtual-puppet-project/.github/blob/master/profile/README.md), see each 
tracker's README for build instructions. The dependencies will need to be placed in the `resources` folder in their appropriate path

## Building the Godot fork

0. Make sure you have the following tools installed and available on your `PATH` if applicable:

   * `git`

   * `python3` (preferably version 3.10+)

   * [All the tools needed for compiling Godot](https://docs.godotengine.org/en/stable/development/compiling/introduction_to_the_buildsystem.html)

   * A `bash`-compatible prompt. Git Bash comes preinstalled with Git for Windows

1. Clone the following utility repositories:

   1. [godot](https://github.com/godotengine/godot)

   2. [godot-module-applier](https://github.com/virtual-puppet-project/godot-module-applier)

   3. [godot-build-scripts](https://github.com/virtual-puppet-project/godot-build-scripts)

2. Your directory structure should look like

   * ./

       * godot/

       * godot-module-applier/

       * godot-build-scripts/

3. Inside of the `godot/` directory, run `cp ../godot-module-applier/applier.py .` to copy the `applier.py` script into the `godot/` directory. Do the same for `modules_file.txt`

4. Inside of the `godot/` directory, run `python3 applier.py apply`. This will pull in and apply all modules, third-party sources, and patches to Godot

5. Inside of the `godot/` directory, run `cp ../godot-build-scripts/build-* .` to copy all build scripts into the `godot/` directory

6. Inside of the `godot/` directory, to build various versions of the editor do:

   * Editor: `./build-editor.sh`

   * Release template: `./build-normal-template.sh`

7. The compiled Godot binary will be available in the `godot/` directory under the `bin/` directory