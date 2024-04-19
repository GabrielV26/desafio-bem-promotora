using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntradaDeDados.Models
{
    [Table("Clientes")] // Especifica o nome da tabela no banco de dados
    public class Cliente
    {
        [Key] // Define a propriedade Id como chave primária
        public int Id { get; set; }

        [Required]
        public string? Idade { get; set; }

        [Required]
        public string? Convenio { get; set; }

        [Required]
        public string? FaixaSalarial { get; set; }

        [Required]
        [Column("MotivoEmprestimo")] // Especifica o nome da coluna no banco de dados
        public string? MotivoEmprestimo { get; set; }
    }
}
