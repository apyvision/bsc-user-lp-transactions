/* eslint-disable prefer-const */
import {PairCreated} from '../../generated/UniswapFactory2/Factory'
import {log} from "@graphprotocol/graph-ts/index";
import {UniswapPair as PairTemplate} from '../../generated/templates'

export function handleNewPair(event: PairCreated): void {
  // create the tracked contract based on the template
  log.warning("[Pancake] Creating factory v2 tracking for pair: {}", [event.params.pair.toHexString()])
  PairTemplate.create(event.params.pair)
}
