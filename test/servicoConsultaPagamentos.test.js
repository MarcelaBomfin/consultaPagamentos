
import assert from 'assert';
import ServicoConsultaPagamentos from '../src/ServicoConsultaPagamentos.js';

describe('ServicoConsultaPagamentos', () => {

  it('Registrar um pagamento com categoria "cara" quando valor > 100', () => {
    const servico = new ServicoConsultaPagamentos();

    servico.pagar('1234', 'Empresa X', 150);

    const ultimo = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimo.categoria, 'cara');
  });

  it('Registrar um pagamento com categoria "padrão" quando valor <= 100', () => {
    const servico = new ServicoConsultaPagamentos();

    servico.pagar('5678', 'Empresa Y', 50);

    const ultimo = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimo.categoria, 'padrão');
  });

  it('deve retornar o último pagamento realizado', () => {
    const servico = new ServicoConsultaPagamentos();

    servico.pagar('1111', 'Empresa A', 10);
    servico.pagar('2222', 'Empresa B', 200);

    const ultimo = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimo.codigoBarras, '2222');
    assert.strictEqual(ultimo.empresa, 'Empresa B');
    assert.strictEqual(ultimo.valor, 200);
  });

  it('deve retornar null se não houver pagamentos', () => {
    const servico = new ServicoConsultaPagamentos();

    const ultimo = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimo, null);
  });

});