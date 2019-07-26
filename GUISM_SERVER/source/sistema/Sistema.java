package sistema;

import caminho.Caminho;
import cidade.Cidade;
import descendencia.Descendencia;
import especializacao.Especializacao;
import habilidade.Habilidade;
import habitos.Habito;
import idiomas.Idioma;
import kikaha.jdbi.serializers.Column;
import lombok.Data;
import patrono.Patrono;
import raca.Raca;

import java.util.Set;

@Data
public class Sistema {

    Set<Raca> racas;

    Set<Caminho> caminhos;

    Set<Cidade> cidades;

    Set<Descendencia> descendencias;

    Set<Habilidade> habilidades;

    Set<Habito> habitos;

    Set<Idioma> idiomas;

    Set<Patrono> patronos;
}
