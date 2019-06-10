---
layout: post
title: Terrain Generation using Noise
categories: world building terrain procedural generation perlin noise
description: A discussion on a terrain generator I made.
author: John Bucknam
image: assets/img/terrain-generation/post.bmp
comments: true
---
I've found procedural generation to be interesting for its structure from logic, the creative beauty in some procedural art, and most of all, its usage as a powerful and creative tool in both artwork and functionality. Various generation-based tools could be used such as designing levels, characters, or other specifics in game design, but in this case I am focusing on map making and world building.

I became interested in world building after getting more into Dungeons & Dragons, and thought it'd be interesting if I could make a world that could be generated with models that I could reference whenever needed. I was further inspired after seeing some of the maps and worlds done by [mewo2](https://mewo2.com/notes/terrain/), [Azgaar](https://azgaar.github.io/Fantasy-Map-Generator/), and others with more or less systems which still amaze me.

For this reason, I started with trying to make some world building tools, starting with some terrain generation with noise.

# Perlin Noise
I decided to use Perlin noise for the terrain generation. It's an example I've seen several times and I figured it would be an easier place to start. Most people typically used some module or library, but I preferred to create the algorithm for later updates.

I looked the original paper by Ken Perlin, but I found the tutorial by [Catlike Coding](https://catlikecoding.com/unity/tutorials/noise/) to be a better and thorough example and decided to use that as my base, taking their Unity code into Python. I got a better understanding of the algorithm from reading some posts by [Red Blob Games](https://www.redblobgames.com/maps/terrain-from-noise/), who better described how the different parameters for the noise affected it. I don't think any explanation I would do this topic justice, and would ***recommend*** playing with the tools and examples in Red Blob Games.

I achieved a good form of 2D noise as **shown below:**
  - **resolution:** 512x512
  - **frequency:** 16
  - **octaves:** 1
  - **lacunarity:** 3
  - **persistence:** 0

<span class="image main">
  ![alt text][Perlin Noise]
</span>

**Another example below:**
  - **resolution:** 256x256
  - **frequency:** 4
  - **octaves:** 5
  - **lacunarity:** 1
  - **persistence:** 0.3

<span class="image main">
  ![alt text][Perlin Fuzz]
</span>

## Other Noises
I also spent the time to make Simplex Noise, a newer version of Perlin noise, but is patented for noises greater than 2 dimensions. However, it allows for sharper noise as seen with the Simplex 1 example.

**Simplex 1:**
  - **resolution:** 512x512
  - **frequency:** 16
  - **octaves:** 1
  - **lacunarity:** 1
  - **persistence:** 0

<span class="image main">
  ![alt text][Simplex Noise]
</span>

**Simplex 2:**
  - **resolution:** 512x512
  - **frequency:** 4
  - **octaves:** 5
  - **lacunarity:** 1
  - **persistence:** 0.3

<span class="image main">
  ![alt text][Simplex Fuzz]
</span>

There is also Value Noise which, unlike Perlin and Simplex noise, does not use gradients. Instead it uses the random hashes directly from the Hash Table to form its final value. These basic values form squares and can be seen in the examples below.

**Value 1:**
  - **resolution:** 512x512
  - **frequency:** 16
  - **octaves:** 1
  - **lacunarity:** 1
  - **persistence:** 0

<span class="image main">
  ![alt text][Value Noise]
</span>

**Value 2:**
  - **resolution:** 512x512
  - **frequency:** 4
  - **octaves:** 5
  - **lacunarity:** 1
  - **persistence:** 0.3

<span class="image main">
  ![alt text][Value Fuzz]
</span>

# Terrain Generation
As seen in the different noises, there are various values which allow valleys and mountains to form based on neighboring values. This is heightened with larger frequencies, creating more valleys and more mountains in these noises. By scaling the noise to values between 0 and 1 (inclusive), we can then cut discrete layers representing different parts of the terrain.

For instance, lower values should be set to oceanic terrain, middle values should become land, and higher values should become mountains and mountain peaks. We describe each terrain layer by coloring them based on what we'd expect

**Land Terrain:**
  - **resolution:** 256x256
  - **frequency:** 4
  - **octaves:** 3
  - **lacunarity:** 1
  - **persistence:** 0.3

<span class="image main">
  ![alt text][Land Terrain]
</span>

As we can see from the example above, the use of these layers is effective in simulating land masses. The blockiness can be fixed by increasing the resolution. More detail can also be added by repeating the effects with a cloud layer. In this case, we add several layers of clouds that appear with higher value noise. We also add an alpha value to make it opaque and give visibility to the lower land terrain.

**Cloud Terrain:**
  - **resolution:** 256x256
  - **frequency:** 4
  - **octaves:** 3
  - **lacunarity:** 1
  - **persistence:** 0.3

<span class="image main">
  ![alt text][Cloud Terrain]
</span>

## Final Result
When we combine these two layers, we get fantastic results as seen below.

**Final Terrain:**
  - **resolution:** 1024x1024
  - **frequency:** 4
  - **octaves:** 3
  - **lacunarity:** 1
  - **persistence:** 0.3

<span class="image main">
  ![alt text][Final Terrain]
</span>

 Some obvious flaws with the image is the lack of layers, which is an easy remedy. Some tweaking could also improve the general quality.

# Continuation
I hope to expand pass the pixel bitmaps by making meshes using Voronoi diagrams or Delaunay triangulations. Other possible meshes include simple square, triangle, or hexagonal tessellations which would be nice for testing different models on top of the terrain generation.

I was also checking out the Procedural Generation subreddit and found some suggestions for texturing the layers. While I think this is an interesting concept and would definitely improve quality, this isn't my main focus at this time. I also hope to add Vulkan or OpenCL/OpenGL to improve performance overall.


[Perlin Noise]: /assets/img/terrain-generation/perlin.png
[Perlin Fuzz]: /assets/img/terrain-generation/perlin2.png

[Simplex Noise]: /assets/img/terrain-generation/simplex.png
[Simplex Fuzz]: /assets/img/terrain-generation/simplex2.png

[Value Noise]: /assets/img/terrain-generation/value.png
[Value Fuzz]: /assets/img/terrain-generation/value2.png

[Land Terrain]: /assets/img/terrain-generation/land_terrain.bmp
[Cloud Terrain]: /assets/img/terrain-generation/cloud_terrain.bmp
[Final Terrain]: /assets/img/terrain-generation/big_terrain.bmp
