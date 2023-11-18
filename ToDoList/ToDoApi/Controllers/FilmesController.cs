using Microsoft.AspNetCore.Mvc;
using ToDoApi.Models;

namespace ToDoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FilmesController : ControllerBase
    {
        private Contexto _contexto;

        public FilmesController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet("{UsuarioId}")]
        public async Task<ActionResult<Filme>> FavoritoPorUsuario(int UsuarioId)
        {
            Filme filme = await _contexto.Filmes.FindAsync(UsuarioId);
            if (filme== null)
                return NotFound();

            return filme;
        }

        [HttpPost]
        public async Task<ActionResult<Filme>> FavoritaFilme(Filme filme)
        {
            await _contexto.Filmes.AddAsync(filme);
            await _contexto.SaveChangesAsync();

            return Ok("Filme/Série favoritado(a)!");
        }
    }
}