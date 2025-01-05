import React from "react";
import { Search, PlusCircle } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "./components/ui/table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";

export function App() {
  return (
    <div className="select-none p-6 max-w-4xl mx-auto space-x-4">
      <h1 className="text-3xl font-bold mb-4">Produtos</h1>

      <div className="flex items-center justify-evenly mb-3">
        <form className="flex items-center gap-5">
          <Input name="id" placeholder="ID do Pedido" />
          <Input name="name" placeholder="Nome do produto" />
          <Button type="submit" variant="default">
            <Search className="w-3 h-3 mr-2" />
            Filtrar resultados
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="w-3 h-3 mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription>
                Inserir um novo produto no sistema?
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-6 items-center text-right gap-3">
                <Label htmlFor="name">Produtos</Label>
                <Input className="col-span-3" id="name"/>
              </div>
              <div className="grid grid-cols-6 items-center text-right gap-3">
                <Label htmlFor="price">Preço</Label>
                <Input className="col-span-3" id="price"/>
              </div>

              <DialogFooter>
                <DialogClose>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
                </DialogClose>

                <Button type="submit" variant="default">
                  Salvar
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg shadow-md ">
        <Table>
          {/* Cabeçalho da Tabela */}
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>

          {/* Corpo da Tabela */}
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>Produto {i + 1}</TableCell>
                <TableCell>R$ {250 + i * 10},00</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default App;
