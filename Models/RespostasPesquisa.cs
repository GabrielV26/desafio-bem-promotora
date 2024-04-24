using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntradaDeDados.Models
{
    [Table("RespostasPesquisa")] // Especifica o nome da tabela no banco de dados
    public class RespostasCliente
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public FaixaIdade? FaixaIdade { get; set; }

        [Required]
        public Convenio? Convenio { get; set; }

        [Required]
        public FaixaSalarial? FaixaSalarial { get; set; }

        [Required]
        [Column("MotivoEmprestimo")]
        public MotivoEmprestimo? MotivoEmprestimo { get; set; }
    }

    public enum FaixaIdade
    {
        Ate30Anos,
        De30a50Anos,
        De50a65Anos,
        AcimaDe65Anos
    }

    public enum Convenio
    {
        INSS,
        SIAPE,
        ForcasArmadas,
        Outros
    }

    public enum FaixaSalarial
    {
        Ate2SM,
        De2a4SM,
        De4a6SM,
        AcimaDe6SM
    }

    public enum MotivoEmprestimo
    {
        PagarContas,
        ReformaDaCasa,
        CompraDeCarro,
        Outros
    }
}
