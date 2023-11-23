using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoApi.Models;
using ToDoList.Models;


namespace ToDoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TarefasController : ControllerBase
    {
        private Contexto _contexto;

        public TarefasController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tarefa>>> RetornaTodasTarefas()
        {
            return await _contexto.Tarefas.ToArrayAsync();
        }

        [HttpGet("{iD_TAREFA}")]
        public async Task<ActionResult<Tarefa>> RetornaTarefaPorId(int iD_TAREFA)
        {
            Tarefa tarefa = await _contexto.Tarefas.FindAsync(iD_TAREFA);

            if (tarefa== null)
                return NotFound();

            return tarefa;
        }

        [HttpPost]
        public async Task<ActionResult<Tarefa>> AdicionarTarefa(Tarefa tarefa)
        {
            await _contexto.Tarefas.AddAsync(tarefa);
            await _contexto.SaveChangesAsync();

            return Ok("Tarefa adicionada!");
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarTarefa(Tarefa tarefa)
        {
            _contexto.Tarefas.Update(tarefa);
            await _contexto.SaveChangesAsync();
            return Ok("Tarefa modificada.");
        }

        [HttpDelete("{iD_TAREFA}")]
        public IActionResult ExcluirTarefa(int iD_TAREFA)
        {
            iD_TAREFA = Convert.ToInt32(iD_TAREFA);
            Tarefa tarefa = _contexto.Tarefas.FirstOrDefault(
                tarefa => tarefa.iD_TAREFA == iD_TAREFA);

            if(tarefa == null) return NotFound();

            _contexto.Tarefas.Remove(tarefa);
            _contexto.SaveChanges();
            return Ok("Tarefa removida.");
        }
    }
}