Source = require './source'
csv = require 'csv'
util = require 'util'

module.exports = class CsvFileSource extends Source
  constructor: (options) ->
    Source.call(this, options)
    @fileName = options.fileName
    @channel = options.channel

  _generateUrls: (cb) ->
    console.log "Generating sitemap urls from csv #{@fileName}"
    updatedAt = new Date()
    csv().from.path(@fileName).transform((row, index, csvCb) =>
      imageUrl = if row[1]?.length then row[1] else null
      cb {
        url: @urlFormatter(row[0])
        channel: @channel
        updatedAt: updatedAt
        changefreq: @changefreq
        priority: @priority
        image: imageUrl
      }
      csvCb(null, null)
    ).to.array( (data, count) =>
      @end()
    )