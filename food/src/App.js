import React from 'react';

function FavoriteFoodsCard() {
  const favoriteFoods = ['Mandhi','Chocolate ', 'Biryani', 'Ice Cream'];

  function showLove(food) {
    document.getElementById('foodMsg').innerText = `I love ${food}!`;
  }

  const cardStyle = {
    border: '2px solid #28a745',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '25px',
    width: '400px',
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1  className="mb-4">My Favorite Foods</h1>

        <div style={cardStyle} className="mx-auto mb-4">
          <ul className="list-unstyled">
            {favoriteFoods.map((food, index) => (
              <li key={index} className="mb-2">
                <span className="me-2">{food}</span>
                <button
                  className="btn btn-sm btn-outline-success" onClick={() => showLove(food)}
                >
                  Love it
                </button>
              </li>
            ))}
          </ul>
        </div>

        <p id="foodMsg" className="fw-bold">
          Select a food that you love!
        </p>
      </div>
    </div>
  );
}

export default FavoriteFoodsCard;