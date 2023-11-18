using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;


namespace ToDoApi.Models
{
    public class Filme
    {
        [Key]
        public int UsuarioId { get; set; } 
        public int FilmeId {get; set;}
        public DateTime DataAlteracao { get; set; } = DateTime.Now;
        public bool flagFavorito { get; set; }
    }
}