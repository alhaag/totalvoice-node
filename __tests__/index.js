const Totalvoice = require('../index.js');
const HttpClient = require('../lib/client.js');
const Chamada = require('../lib/api/chamada.js');
const Audio = require('../lib/api/audio.js');
const Perfil = require('../lib/api/perfil');
const Conta = require('../lib/api/conta');
const Composto = require('../lib/api/composto');
const Conferencia = require('../lib/api/conferencia');
const SMS = require('../lib/api/sms');
const TTS = require('../lib/api/tts');
const Central = require('../lib/api/central');
const DID = require('../lib/api/did');

const client = new Totalvoice('123456789', 'https://foo.bar');

test('Testa o atributo se é instância de Audio', function(){
    expect(client.audio).toBeInstanceOf(Audio);
});

test('Testa o atributo se é instância de Chamada', function(){
    expect(client.chamada).toBeInstanceOf(Chamada);
});

test('Testa o atributo se é instância de Peril', function(){
    expect(client.perfil).toBeInstanceOf(Perfil);
});

test('Testa o atributo se é instância de Conta', function(){
    expect(client.conta).toBeInstanceOf(Conta);
});

test('Testa o atributo se é instância de Composto', function(){
    expect(client.composto).toBeInstanceOf(Composto);
});

test('Testa o atributo se é instância de Conferência', function(){
    expect(client.conferencia).toBeInstanceOf(Conferencia);
});

test('Testa o atributo se é instância de SMS', function(){
    expect(client.sms).toBeInstanceOf(SMS);
});

test('Testa o atributo se é instância de TTS', function(){
    expect(client.tts).toBeInstanceOf(TTS);
});

test('Testa o atributo se é instância de Central', function(){
    expect(client.central).toBeInstanceOf(Central);
});

test('Testa o atributo se é instância de DID', function(){
    expect(client.did).toBeInstanceOf(DID);
});