import { storage } from "./firebaseconfig";

export default function getTimeAgo(firebaseTimestamp) {
  // console.log(firebaseTimestamp);
    const time = new Date((firebaseTimestamp.seconds) * 1000); // Convert seconds to milliseconds
    const diffInSeconds = Math.floor((Date.now() - time) / 1000); // Difference in seconds
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minutes ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hours ago`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} days ago`;
    } else if (diffInSeconds < 31536000) {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months} months ago`;
    } else {
      const years = Math.floor(diffInSeconds / 31536000);
      return `${years} years ago`;
    }
  }
  
  // Example Firebase Timestamp
//   const firebaseTimestamp = { seconds: 1732781627, nanoseconds: 579000000 };
  
//   // Get "time ago" format
//   console.log(getTimeAgo(firebaseTimestamp)); // Output: e.g., "2 minutes ago"
  