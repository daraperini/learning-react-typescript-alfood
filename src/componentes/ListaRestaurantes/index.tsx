import { useEffect, useState } from "react";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";
import axios, { AxiosRequestConfig } from "axios";
import { IPaginacao } from "../../interfaces/IPaginanacao";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

interface IParametrosBusca {
  ordering?: string;
  search?: string;
}

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [proximaPagina, setProximaPagina] = useState("");
  const [paginaAnterior, setPaginaAnterior] = useState("");

  const [busca, setBusca] = useState("");
  const [ordenador, setOrdenador] = useState("");

  useEffect(() => {
    carregarDados("http://localhost:8000/api/v1/restaurantes/");
  }, []);

  const carregarDados = (url: string, opcoes: AxiosRequestConfig = {}) => {
    axios
      .get<IPaginacao<IRestaurante>>(url, opcoes)
      .then((resposta) => {
        setRestaurantes(resposta.data.results);
        setProximaPagina(resposta.data.next);
        setPaginaAnterior(resposta.data.previous);
      })
      .catch((erro) => console.log(erro));
  };

  const buscaRestaurante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const opcoes = {
      params: {} as IParametrosBusca,
    };

    if (busca) {
      opcoes.params.search = busca;
    }

    if (ordenador) {
      opcoes.params.ordering = ordenador;
    }

    carregarDados("http://localhost:8000/api/v1/restaurantes/", opcoes);
  };

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 5 }}
        component="form"
        onSubmit={buscaRestaurante}
      >
        <TextField
          label="Pesquisar Restaurante"
          variant="outlined"
          onChange={(evento) => setBusca(evento.target.value)}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="select-label">Ordenar</InputLabel>
          <Select
            labelId="select-label"
            value={ordenador}
            label="Ordenar"
            onChange={(evento) => setOrdenador(evento.target.value)}
          >
            <MenuItem value="nome">Nome</MenuItem>
            <MenuItem value="id">Id</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit">Buscar</Button>
      </Box>
      {restaurantes?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      {
        <button
          onClick={() => carregarDados(paginaAnterior)}
          disabled={!paginaAnterior}
        >
          Página anterior
        </button>
      }
      {
        <button
          onClick={() => carregarDados(proximaPagina)}
          disabled={!proximaPagina}
        >
          Próxima página
        </button>
      }
    </section>
  );
};

export default ListaRestaurantes;
