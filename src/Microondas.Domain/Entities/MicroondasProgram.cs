namespace Microondas.Domain.Entities;

public class MicroondasProgram
{
    public string Nome { get; set; }
    public string Alimento { get; set; }
    public int TempoSegundos { get; set; }
    public int Potencia { get; set; } = 10;
    public char CaractereAquecimento { get; set; }
    public string? Instrucoes { get; set; }
    public bool IsPredefinido { get; set; }
    public bool IsCustomizado => !IsPredefinido;
}
