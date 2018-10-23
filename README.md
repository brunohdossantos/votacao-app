# Sistema de Votação em tempo real #


[![Github-Release](https://img.shields.io/github/release/filoe/cscore.svg)](https://github.com/myersBR/votacao-app/releases)

Este trabalho apresenta uma implementação de um sistema de votação em tempo real em um ambiente cliente/servidor virtualizando ferramentas e tecnologias livres que foi desenvolvido como trabalho para a disciplina de Plataforma de Desenvolvimento em Software Livre e Servidores Web.

# Introdução
Geralmente nos sistemas web, a comunicação é realizada através de requisições do cliente para o servidor, ou seja, o servidor somente envia dados para o cliente somente quando é requisitado. Porém existe uma outra forma de comunicação entre eles que é a comunicação em tempo real, em que um servidor sempre envia dados atualizados para os clientes sem precisar de requisições.
Portanto, o objetivo deste trabalho é demonstrar a comunicação em tempo real entre cliente e servidor utilizando um sistema de votação. A demonstração foi realizada em um ambiente virtualizado, sendo uma máquina virtual servidor e outra cliente. O servidor hospeda o sistema, que foi desenvolvido para este trabalho, e o cliente irá utilizá-lo.
Todas as ferramentas e tecnologias utilizadas para o desenvolvimento deste trabalho são livres.
Além da Introdução, este trabalho está composto pelos seguintes capítulos: Softwares e ferramentas utilizadas, Construção do ambiente virtual, Aplicação Web, Conclusão e Referências bibliográficas.




CSCore is based on a very extensible architecture which allows you to make it fit to your needs without any major effort. You can build music players, voice chats, audio recorders and so on!

For more details, take a look at the source or the [online documentation](http://filoe.github.io/cscore/sharpDox/).

Feel free to download or clone the source code:

    https://github.com/filoe/cscore.git

You may prefer to install the [CSCore nuget package](https://www.nuget.org/packages/CSCore/):

    Install-Package CSCore
    
For **FFmpeg** support, install the [CSCore.Ffmpeg nuget package](https://www.nuget.org/packages/CSCore.Ffmpeg/)

    Install-Package CSCore.Ffmpeg -Pre
    
### Why CSCore? ###
 - **Highly optimized PERFORMANCE** through usage of CLI instructions
 - **Designed for newbies and professionals** 
 - **Tons of features**
 - **Fast support on [github](https://github.com/filoe/cscore), [codeplex](http://cscore.codeplex.com/) or [stackoverflow](http://stackoverflow.com/questions/tagged/cscore)** 
 - **High code coverage through unit tests** 
 - **Licensed under the MS-PL** (does not include the [CSCore.Ffmpeg](https://github.com/filoe/cscore/tree/master/CSCore.Ffmpeg) project which is licensed under the LGPL)

### Supported Features ###

Currently the following features are implemented:

- **Realtime audio processing**
  - Process audio data in realtime
  - Apply any processors in any order you want in realtime
  - Create custom processors (e.g. effects, analyzes, decoders,...)
- **Codecs** *1
  - MP3
  - WAVE (PCM, IeeeFloat, GSM, ADPCM,...)
  - FLAC
  - AAC
  - AC3
  - WMA
  - Raw data
  - OGG-Vorbis (through NVorbis)
  - FFmpeg (lots of additional formats, see [CSCore.Ffmpeg](https://github.com/filoe/cscore/tree/master/CSCore.Ffmpeg))
- **FFmpeg support**
  - Supported through [CSCore.Ffmpeg](https://github.com/filoe/cscore/tree/master/CSCore.Ffmpeg))
- **Speaker Output**
  - WaveOut
  - DirectSoundOut (realtime streaming)
  - WASAPI (loop- and event-callback + exclusive mode available)
  - XAudio2
- **Recording**
  - WaveIn
  - WASAPI (loop- and event-callback + exclusive mode available)
  - WASAPI loopback capture (capture output from soundcard)
- **DSP Algorithms**
  - Fastfouriertransform (FFT)
  - Effects (Echo, Compressor, Reverb, Chorus, Gargle, Flanger,...)
  - Resampler
  - Channel-mixing using custom channel-matrices
  - Generic Equalizer
  - ...
- **XAudio2 support**
  - XAudio2.7 and XAudio2.8 support
  - 3D Audio support (see X3DAudio sample)
  - Streaming source voice implementation allowing
    the client to stream any codec, custom effect,... to XAudio2
  - Optimized for games
- **Mediafoundation encoding and decoding**
- **DirectX Media Objects Wrapper**
- **CoreAudioAPI Wrapper**
  - WASAPI
  - Windows Multimedia Devices
  - Windows Audio Session
  - Endpoint Volume,...
- **Multi-Channel support**
- **Flexible**
  - Configure and customize any parts of CSCore
  - Use low latency values for realtime performance, high latency values for stability
  - Adjust the audio quality
  - Configure custom channel matrices
  - Create custom effects
  - ...
  - Or simply: **Make CSCore fit your needs!**
- **Tags** (ID3v1, ID3v2, FLAC)
- **Sample Winforms Visualizations**
- **Optimized performance though the usage of CLI instructions provided by a custom post compiler**

**\*1** Some Codecs are only available on certain platforms. For more details, see [Codeplex-Page](http://cscore.codeplex.com/).

Some projects using already using cscore:
- [Dopamine](http://www.digimezzo.com/software/dopamine/): _An music player which tries to keep listening to music clean and simple._
- [Hurricane](https://github.com/Alkalinee/Hurricane): _Is a powerful music player written in C# based on [CSCore sound library](https://github.com/filoe/cscore)._
- [Sharpex2D](https://github.com/ThuCommix/Sharpex2D): A game engine which _allows you to create beautiful 2D games under .NET for Windows and Mono compatible systems_
- [Turnt-Ninja](https://github.com/opcon/turnt-ninja): A beat-fighting-ninja-like-get-turnt rhythm game inspired by the wonderful Super Hexagon by Terry Cavanagh.
- [HTLED](https://www.youtube.com/watch?v=tbrKepBgH3M): A audio visualization displayed on a selfmade 32x16 LED matrix.
- ...

#### Samples: ####

["CSCore - Visualization"](Samples/WinformsVisualization) Sample:

![VIS_SAMPLE](http://download-codeplex.sec.s-msft.com/Download?ProjectName=cscore&DownloadId=970569)

["CSCoreWaveform"](Samples/CSCoreWaveform) Sample:

![WAVFRM_SAMPLE](http://fs5.directupload.net/images/160229/adjvd9u9.png)

For more samples see [Samples](Samples/)

#### As long as this document is in development, see [Codeplex](http://cscore.codeplex.com/) for more details.  ####

