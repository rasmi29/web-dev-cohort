# **HTML `<video>` Tag**

The `<video>` tag in HTML is used to embed video content on a webpage. It allows you to display video files directly in the browser without requiring additional plugins (like Flash). You can use it to play videos such as MP4, WebM, or Ogg formats.

### **Attributes of `<video>` Tag:**
Here are the most common attributes you can use with the `<video>` tag:

- **`src`**: Specifies the path to the video file.
- **`controls`**: Adds play, pause, and volume controls.
- **`autoplay`**: Automatically starts playing the video as soon as it is ready.
- **`loop`**: Loops the video once it finishes.
- **`muted`**: Starts the video with the sound muted.
- **`poster`**: Defines an image to be shown before the video starts (a preview image).
- **`width` and `height`**: Defines the dimensions of the video player.
- **`preload`**: Specifies if the video should be loaded when the page is loaded (`auto`, `metadata`, or `none`).

### **Basic Syntax:**
```html
<video src="path/to/video.mp4" controls width="600" height="400">
  Your browser does not support the video tag.
</video>


```
# **HTML `<track>` Tag**

The `<track>` tag is used to specify text tracks for `<video>` and `<audio>` elements in HTML. Text tracks are used to display subtitles, captions, descriptions, or chapters during the playback of media. The `<track>` tag does not display anything itself but adds a text-based track to the video or audio content.

### **Common Attributes of `<track>` Tag:**

- **`src`**: Specifies the path to the track file (e.g., `.vtt` for subtitles).
- **`kind`**: Specifies the type of text track. Common values:
  - `subtitles`: Provides subtitles for the video/audio.
  - `captions`: Provides captions (for hearing-impaired users), typically containing all spoken dialogue and relevant non-verbal sounds.
  - `descriptions`: Describes video content for visually impaired users.
  - `chapters`: Used for chapters within the media.
- **`srclang`**: Specifies the language of the track. The value should be a language code (e.g., `en` for English, `fr` for French).
- **`label`**: Defines a user-readable title for the track, which is shown in the media player's track selection menu.
- **`default`**: Specifies that the track should be enabled by default when the media is played.

### **Basic Syntax:**
```html
<video controls width="600">
  <source src="movie.mp4" type="video/mp4">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" default>
  Your browser does not support the video tag.
</video>
```
# HTML `<audio>` Tag

The `<audio>` tag in HTML is used to embed audio content in web pages. It provides a simple way to include audio files that can be played directly in the browser without the need for additional plugins.

## Features of the `<audio>` Tag
- Supports multiple audio formats, such as MP3 and OGG.
- Provides controls for play, pause, volume, and more.
- Allows advanced functionalities like autoplay, looping, and preloading.

## How to Use the `<audio>` Tag

Here is an example of using the `<audio>` tag to play two types of audio formats, MP3 and OGG:

```html
<audio controls>
    <source src="example-audio.mp3" type="audio/mpeg">
    <source src="example-audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

### Explanation
1. **`<audio controls>`**: Adds a built-in control panel for play, pause, and volume.
2. **`<source>` Tag**: Specifies the audio file and its type.
   - The browser will use the first supported format (e.g., MP3 or OGG).
3. **Fallback Text**: The text inside the `<audio>` tag is displayed if the browser does not support the element.

## Audio Formats
- **MP3 (audio/mpeg)**: Widely supported and commonly used format for audio.
- **OGG (audio/ogg)**: Open-source and supported by most modern browsers.

## Additional Attributes
- **`autoplay`**: Automatically starts playing the audio when the page loads.
- **`loop`**: Repeats the audio indefinitely.
- **`preload`**: Indicates how the browser should load the audio:
  - `none`: Does not preload.
  - `metadata`: Preloads only metadata.
  - `auto`: Preloads the entire file.

For more details, check the [MDN Web Docs on `<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).

---

# HTML `<iframe>` Tag for Embedding Videos

The `<iframe>` tag in HTML is used to embed external content, such as videos, into a web page. It is commonly used for embedding YouTube videos.

## Example of an Embedded YouTube Video

```html
<iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/hVYLszi_um0" 
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>
```

### Explanation of Attributes
1. **`width` and `height`**: Specify the size of the embedded video in pixels.
2. **`src`**: The URL of the content to be embedded. For YouTube videos, use the format `https://www.youtube.com/embed/VIDEO_ID`.
3. **`title`**: Describes the content of the iframe. This is useful for accessibility.
4. **`allow`**: Grants permissions for certain features, such as:
   - `accelerometer`: Enables motion-based controls.
   - `autoplay`: Allows the video to play automatically.
   - `clipboard-write`: Allows copying to the clipboard.
   - `encrypted-media`: Allows playback of encrypted media.
   - `gyroscope`: Enables gyroscopic controls.
   - `picture-in-picture`: Enables picture-in-picture mode.
   - `web-share`: Allows the video to use the Web Share API.
5. **`allowfullscreen`**: Enables fullscreen mode for the embedded content.

## Key Benefits of Using `<iframe>`
- Allows embedding dynamic content like videos, maps, or other web pages.
- Ensures proper integration with external services like YouTube.

For more details, check the [MDN Web Docs on `<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

# Common Video and Audio Formats

Here is a table listing three common video and audio formats along with their descriptions:

| Format      | Type   | Description                                                                 |
|-------------|--------|-----------------------------------------------------------------------------|
| **MP4**     | Video  | A highly versatile video format widely supported across devices and browsers.|
| **WebM**    | Video  | An open-source format designed for web streaming with high compression.      |
| **AVI**     | Video  | A classic video format with high-quality but larger file sizes.              |
| **MP3**     | Audio  | The most popular audio format, known for its high compression and quality.   |
| **OGG**     | Audio  | Open-source audio format with good quality and modern browser support.       |
| **WAV**     | Audio  | Uncompressed audio format with high-quality sound, suitable for editing.     |

This table provides an overview of commonly used formats, highlighting their purpose and key characteristics.
