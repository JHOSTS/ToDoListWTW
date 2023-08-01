using Microsoft.EntityFrameworkCore;
using ToDoList.Models;

namespace ToDoApi.Models
{
    public class Contexto : DbContext
    {
        public DbSet<Tarefa> Tarefas { get; set; }

        public Contexto(DbContextOptions<Contexto> opts) : base(opts)
        {

        }
    }
}