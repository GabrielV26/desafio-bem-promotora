using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace desafio_bem_promotora.Migrations
{
    public partial class Dia24deAbril : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Idade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Convenio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FaixaSalarial = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MotivoEmprestimo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RespostasClientes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FaixaIdade = table.Column<int>(type: "int", nullable: false),
                    Convenio = table.Column<int>(type: "int", nullable: false),
                    FaixaSalarial = table.Column<int>(type: "int", nullable: false),
                    MotivoEmprestimo = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RespostasClientes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "RespostasClientes");
        }
    }
}
