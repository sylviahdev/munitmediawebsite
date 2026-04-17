const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

export const getVideos = async () => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=9`
    );

    const data = await res.json();

    return data.items
      .filter(item => item.id.videoId)
      .map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high.url,
        link: `https://www.youtube.com/watch?v=${item.id.videoId}`
      }));

  } catch (err) {
    console.error("API error:", err);
    return [];
  }
};