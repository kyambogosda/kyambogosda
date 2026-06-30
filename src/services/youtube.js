const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

const CACHE_DURATION = 60 * 60 * 1000;
const cache = {
  sermons: { data: null, timestamp: null },
  latestSermon: { data: null, timestamp: null },
};

function isCacheValid(cacheEntry) {
  if (!cacheEntry.data || !cacheEntry.timestamp) return false;
  return Date.now() - cacheEntry.timestamp < CACHE_DURATION;
}

export async function getSermons() {
  if (isCacheValid(cache.sermons)) {
    return cache.sermons.data;
  }

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch videos (${response.status})`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  const items = data.items ?? [];
  cache.sermons = { data: items, timestamp: Date.now() };
  return items;
}

export async function getLatestSermon() {
  if (isCacheValid(cache.latestSermon)) {
    return cache.latestSermon.data;
  }

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=1&order=date&type=video&key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch latest sermon (${response.status})`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error.message);
  }

  const item = data.items?.[0] ?? null;
  cache.latestSermon = { data: item, timestamp: Date.now() };
  return item;
}
