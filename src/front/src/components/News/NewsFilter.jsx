import React, { useState } from "react";

export default function NewsFilter({ onFilter }) {
  const [platform, setPlatform] = useState("");
  const [search, setSearch] = useState("");

  const handlePlatformChange = (e) => {
  setPlatform(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = () => {
    onFilter({
      platform,
      search: search.trim(),
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
      <select
        className="rounded-lg px-3 py-2 bg-zinc-800 text-white"
        value={platform}
        onChange={handlePlatformChange}
      >
        <option value="">Todas as plataformas</option>
        <option value="xbox">Xbox</option>
        <option value="nintendo">Nintendo</option>
        <option value="playstation">PlayStation</option>
      </select>

      <input
        className="rounded-lg px-3 py-2 bg-zinc-800 text-white"
        type="text"
        placeholder="Buscar por jogo ou termo..."
        value={search}
        onChange={handleSearchChange}
      />

      <button
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg"
        onClick={handleFilter}
      >
        Filtrar
      </button>
    </div>
  );
}

