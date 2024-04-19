using Microsoft.AspNetCore.Mvc;
using EntradaDeDados.Models;
using System;
using System.Threading.Tasks;
using MeuBanco.Data;
using desafio_bem_promotora.Controllers;

namespace RespostasCli.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RespostasClienteController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RespostasClienteController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostRespostaCliente(RespostasCliente respostaCliente)
        {
            try
            {
                _context.RespostasClientes.Add(respostaCliente);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetRespostaCliente), new { id = respostaCliente.Id }, respostaCliente);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno do servidor: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRespostaCliente(int id)
        {
            var respostaCliente = await _context.RespostasClientes.FindAsync(id);

            if (respostaCliente == null)
            {
                return NotFound();
            }

            return Ok(respostaCliente);
        }
    }
}
