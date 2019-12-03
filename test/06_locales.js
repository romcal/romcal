/*
    The MIT License (MIT)

    Copyright (c) 2014 Pereira, Julian Matthew

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/


var _ = require('lodash');
var moment = require('moment');
var range = require('moment-range');
var should = require('should');

var Romcal = require('../index');
var Utils = Romcal.Utils;

describe('Testing localization functionality', function() {

  this.timeout(0);

  // Locales extended with sample data
  Romcal.Locales.frCA = Romcal.Locales.frCA || {};
  Romcal.Locales.frCA.test = { hello: 'Allo', foo: 'foo' };
  Romcal.Locales.en.test = { hello: 'Hello', foo: 'bar' };
  Romcal.Locales.fr.test = { hello: 'Salut', lorem: 'ipsum' };

  it('If the locale is set to "fr", romcal should output text in French', function() {
    Utils.setLocale('fr');
    Utils.localize({key: 'test.hello'}).should.equal('Salut');
  });

  it('If the locale is set to "fr-CA", romcal should output text in Canadian French', function() {
    Utils.setLocale('fr-CA');
    Utils.localize({key: 'test.hello'}).should.equal('Allo');
  });

  it('If the locale is set with an unknown region, romcal should fallback to its base language when exists in src/locales', function() {
    Utils.setLocale('fr-XX');
    Utils.localize({key: 'test.hello'}).should.equal('Salut');
  });

  it('If a string is missing in the "fr-CA" locale, romcal should fall back to base French', function() {
    Utils.setLocale('fr-CA');
    Utils.localize({key: 'test.lorem'}).should.equal('ipsum');
  });

  it('If a string is missing in the "fr" locale, romcal should fallback to English ', function() {
    Utils.setLocale('fr');
    Utils.localize({key: 'test.foo'}).should.equal('bar');
  });

  it('If an unknown locale is set, romcal should fallback to English', function() {
    Utils.setLocale('xx-XX');
    Utils.localize({key: 'test.hello'}).should.equal('Hello');
  });

  it('When the last locale set is "en", romcal should output English locale', function() {
    Utils.setLocale('fr-CA');
    Utils.setLocale('en');
    Utils.localize({key: 'test.foo'}).should.equal('bar')
  });

});
