import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// ── Módulos a testar ──────────────────────────────────────────────────────────
import {
  isGameNews,
  PAGE_SIZE,
  MAX_PAGES,
  GAME_KEYWORDS,
} from "../components/News/newsUtils.js";

import { getListCovers } from "../components/Profile/profileUtils.js";

// ─────────────────────────────────────────────────────────────────────────────
// TESTE 1 — isGameNews: aceita artigo com palavra-chave no título
// ─────────────────────────────────────────────────────────────────────────────
describe("isGameNews", () => {
  it("1. retorna true quando o título contém 'game'", () => {
    const article = { title: "Best game of the year announced" };
    expect(isGameNews(article)).toBe(true);
  });

  // TESTE 2 — isGameNews: rejeita artigo sem palavra-chave
  it("2. retorna false quando o título não contém nenhuma palavra-chave", () => {
    const article = { title: "Stock market hits record high today" };
    expect(isGameNews(article)).toBe(false);
  });

  // TESTE 3 — isGameNews: é case-insensitive
  it("3. é case-insensitive (aceita 'PlayStation' em maiúsculas)", () => {
    const article = { title: "PlayStation 6 officially revealed" };
    expect(isGameNews(article)).toBe(true);
  });

  // TESTE 4 — isGameNews: funciona com título undefined/null
  it("4. retorna false quando o título é undefined", () => {
    const article = {};
    expect(isGameNews(article)).toBe(false);
  });

  // TESTE 5 — isGameNews: detecta palavra em português "jogos"
  it("5. retorna true para título em português com 'jogos'", () => {
    const article = { title: "Os melhores jogos de 2024" };
    expect(isGameNews(article)).toBe(true);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// TESTE 6 — Constantes de paginação de notícias
// ─────────────────────────────────────────────────────────────────────────────
describe("Constantes de newsUtils", () => {
  it("6. PAGE_SIZE deve ser 9 e MAX_PAGES deve ser 5", () => {
    expect(PAGE_SIZE).toBe(9);
    expect(MAX_PAGES).toBe(5);
  });

  // TESTE 7 — GAME_KEYWORDS contém os consoles esperados
  it("7. GAME_KEYWORDS inclui ps5, xbox e nintendo", () => {
    expect(GAME_KEYWORDS).toContain("ps5");
    expect(GAME_KEYWORDS).toContain("xbox");
    expect(GAME_KEYWORDS).toContain("nintendo");
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// TESTE 8 — getListCovers: retorna placeholder quando coverUrl é nulo
// ─────────────────────────────────────────────────────────────────────────────
describe("getListCovers", () => {
  it("8. retorna URL placeholder quando item não tem coverUrl", () => {
    const list = { items: [{ coverUrl: null }, { coverUrl: undefined }] };
    const covers = getListCovers(list);
    covers.forEach((url) => {
      expect(url).toBe("https://placehold.co/120x160?text=No+Cover");
    });
  });

  // TESTE 9 — getListCovers: converte t_thumb para t_original
  it("9. converte t_thumb para t_original na URL da capa", () => {
    const list = {
      items: [
        { coverUrl: "https://images.igdb.com/igdb/image/upload/t_thumb/abc.jpg" },
      ],
    };
    const [url] = getListCovers(list);
    expect(url).toContain("t_original");
    expect(url).not.toContain("t_thumb");
  });

  // TESTE 10 — getListCovers: respeita o limite máximo de itens
  it("10. respeita o parâmetro max e retorna no máximo 3 capas", () => {
    const list = {
      items: [
        { coverUrl: "https://images.igdb.com/igdb/image/upload/t_thumb/a.jpg" },
        { coverUrl: "https://images.igdb.com/igdb/image/upload/t_thumb/b.jpg" },
        { coverUrl: "https://images.igdb.com/igdb/image/upload/t_thumb/c.jpg" },
        { coverUrl: "https://images.igdb.com/igdb/image/upload/t_thumb/d.jpg" },
        { coverUrl: "https://images.igdb.com/igdb/image/upload/t_thumb/e.jpg" },
      ],
    };
    const covers = getListCovers(list, 3);
    expect(covers).toHaveLength(3);
  });
});
