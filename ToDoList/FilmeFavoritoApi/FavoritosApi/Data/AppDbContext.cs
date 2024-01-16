using FavoritosApi.Models;
using Microsoft.EntityFrameworkCore;

namespace FavoritosApi.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Favoritos> FilmesFavoritos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder option)
            => option.UseSqlServer("Data Source=DESKTOP-NA41VNR;Initial Catalog=Favoritos;User ID=sa;Password=root;TrustServerCertificate=true;");
    }
}
