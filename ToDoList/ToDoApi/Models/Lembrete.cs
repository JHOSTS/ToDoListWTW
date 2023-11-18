using System.ComponentModel.DataAnnotations;

namespace ToDoApi.Models
{
    public class Lembrete
    {
        [Key]
        public int LembreteId { get; set; }
        public string TextoLembrete { get; set; }
        public int UsuarioId { get; set; }
        public DateTime DataCriacao { get; set; } = DateTime.Now;
    }
}
