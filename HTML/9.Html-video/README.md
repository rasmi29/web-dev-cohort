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
