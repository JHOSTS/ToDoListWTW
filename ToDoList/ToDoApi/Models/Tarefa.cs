using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
    public class Tarefa
    {
        [Key]
        public int iD_TAREFA{ get; set; }
        [Required(ErrorMessage = "Nome da tarefa vazio!")]
        public string? nomE_TAREFA { get; set; }
        [Required(ErrorMessage = "Tarefa sem descrição!")]
        public string? descricaO_TAREFA { get; set; }
        public DateTime datA_CRIACAO { get; set; } = DateTime.Now;
        public bool flaG_CONCLUIDA { get; set; }
    }
}