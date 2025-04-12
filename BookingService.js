const KEY = "cinema-bookings";

const BookingService = {
  getBookedSeats(movieId) {
    const data = JSON.parse(localStorage.getItem(KEY) || "{}");
    return data[movieId] || [];
  },
  saveBooking(movieId, seats) {
    const data = JSON.parse(localStorage.getItem(KEY) || "{}");
    data[movieId] = [...(data[movieId] || []), ...seats];
    localStorage.setItem(KEY, JSON.stringify(data));
  },
};

export default BookingService;
