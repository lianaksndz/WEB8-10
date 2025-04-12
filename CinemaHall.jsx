import { useEffect, useState } from "react";
import BookingService from "../services/BookingService";

export default function CinemaHall({ movieId }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const rows = 5;
  const cols = 8;

  useEffect(() => {
    const booked = BookingService.getBookedSeats(movieId);
    setBookedSeats(booked);
  }, [movieId]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleBooking = () => {
    const name = prompt("Ваше ім'я:");
    const email = prompt("Ваш Email:");
    const phone = prompt("Ваш телефон:");
    if (!name || !email.includes("@") || !phone) {
      alert("Будь ласка, заповніть всі поля коректно.");
      return;
    }
    BookingService.saveBooking(movieId, selectedSeats);
    alert("Бронювання успішне!");
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
  };

  return (
    <div>
      <div className="grid grid-cols-8 gap-2 mb-4">
        {[...Array(rows * cols).keys()].map((i) => {
          const seat = i + 1;
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);
          return (
            <div
              key={seat}
              onClick={() => toggleSeat(seat)}
              className={`w-10 h-10 flex items-center justify-center rounded cursor-pointer
                ${isBooked ? "bg-red-500" : isSelected ? "bg-blue-500" : "bg-green-500"}`}
            >
              {seat}
            </div>
          );
        })}
      </div>
      <button
        onClick={handleBooking}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Підтвердити бронювання
      </button>
    </div>
  );
}
