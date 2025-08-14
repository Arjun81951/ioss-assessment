{/* URL Shortener */}
<section className="bg-blue-600 text-white py-16">
  <div className="max-w-xl mx-auto text-center">
    <h3 className="text-2xl font-bold mb-4">URL Shortener</h3>
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const longUrl = e.target.url.value;
        const res = await fetch(`${API_URL}/shorten`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: longUrl }),
        });
        const data = await res.json();
        alert(`Short URL: ${data.short_url}`);
      }}
    >
      <input
        type="url"
        name="url"
        placeholder="Enter your long URL"
        className="w-full p-3 rounded text-black mb-4"
        required
      />
      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
        Shorten
      </button>
    </form>
  </div>
</section>
