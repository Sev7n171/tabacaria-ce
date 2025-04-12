import React, { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";

const products = [
  {
    name: "Seda Premium King Size",
    price: 10.0,
    image: "/images/seda.jpg"
  },
  {
    name: "Essência de Narguilé - Uva",
    price: 25.0,
    image: "/images/essencia.jpg"
  },
  {
    name: "Isqueiro Recarregável",
    price: 15.0,
    image: "/images/isqueiro.jpg"
  },
  {
    name: "Dichavador Metálico",
    price: 30.0,
    image: "/images/dichavador.jpg"
  }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("shop");
  const [paymentMethod, setPaymentMethod] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-black min-h-screen text-white px-4 py-6">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
        Tabacaria-CE
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <Button onClick={() => setView("shop")} variant="ghost" className="text-yellow-400">
          Produtos
        </Button>
        <Button onClick={() => setView("cart")} variant="ghost" className="text-yellow-400">
          Carrinho ({cart.length})
        </Button>
        <Button onClick={() => setView("sobre")} variant="ghost" className="text-yellow-400">
          Sobre
        </Button>
      </div>

      {view === "shop" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Card key={index} className="bg-zinc-900 rounded-2xl shadow-lg">
              <div className="p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-yellow-400 font-bold mb-2">
                  R$ {product.price.toFixed(2)}
                </p>
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                  onClick={() => addToCart(product)}
                >
                  Adicionar ao carrinho
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {view === "cart" && (
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
          {cart.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <ul className="space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="bg-zinc-800 p-3 rounded-xl">
                  {item.name} - R$ {item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-4 font-bold text-yellow-400">
            Total: R$ {total.toFixed(2)}
          </p>
          <div className="flex gap-2 mt-4">
            <Button onClick={() => setView("checkout")} className="bg-green-500 text-white">
              Finalizar compra
            </Button>
            <Button onClick={() => setView("shop")} className="bg-gray-700">
              Continuar comprando
            </Button>
          </div>
        </div>
      )}

      {view === "checkout" && (
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Finalizar Compra</h2>
          <p className="mb-2">Total: R$ {total.toFixed(2)}</p>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Forma de Pagamento:</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="pix"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                PIX
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="debito"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cartão de Débito
              </label>
            </div>
          </div>

          {paymentMethod && (
            <div className="mt-4">
              <Button className="bg-yellow-500 text-black w-full">
                Confirmar Pedido
              </Button>
              <p className="text-green-400 mt-4 text-center">
                Pedido confirmado com pagamento via {paymentMethod.toUpperCase()}!
              </p>
            </div>
          )}
        </div>
      )}

      {view === "sobre" && (
        <div className="max-w-2xl mx-auto text-center mt-10">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Sobre a Tabacaria-CE</h2>
          <p className="text-lg leading-relaxed text-zinc-300">
            Bem-vindo à <span className="text-yellow-400 font-semibold">Tabacaria-CE</span> —
            uma loja virtual criada com estilo, qualidade e sofisticação para quem aprecia os melhores produtos para narguilé e fumo. Nosso objetivo é oferecer uma experiência premium, com atendimento de qualidade e entrega rápida para todo o Brasil.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            Trabalhamos com produtos selecionados como sedas premium, essências exclusivas, acessórios de alta durabilidade e muito mais. Aqui você encontra o que precisa com praticidade e confiança.
          </p>
        </div>
      )}
    </div>
  );
}
