using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using ToDoApi.Models;
using ToDoList.Models;

namespace ToDoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LembretesController : ControllerBase
    {
        private Contexto _contexto;
        private Lembrete _lembrete;

        public LembretesController(Contexto contexto, Lembrete lembrete)
        {
            _contexto = contexto;
            _lembrete = lembrete;
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<Lembrete>>> AdicionarLembrete(Lembrete lembrete)
        {
            await _contexto.Lembrete.AddAsync(lembrete);
            await _contexto.SaveChangesAsync();

            return Ok("Lembrete adicionado!");
        }
    }
}
