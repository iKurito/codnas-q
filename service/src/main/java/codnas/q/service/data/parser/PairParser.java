package codnas.q.service.data.parser;

import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.model.ConformerPair;
import codnas.q.service.shared.dto.PairDTO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class PairParser {
    public static PairDTO toPairParserDTO(Conformer conformer, ConformerPair conformerPair,
                                          Integer id, Boolean isComparison) {
        PairDTO pairDTO = new PairDTO();
        return pairDTO;
    }
}
